import json
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from PIL import Image
import pandas as pd
import os

# Load the JSON file
import sys

if len(sys.argv) < 2:
        print(f"Usage: python {sys.argv[0]} <path_to_json_file>")
        sys.exit(1)

json_file = sys.argv[1]        
    
with open(json_file, 'r') as f:
    data = json.load(f)

# Parse the data structure
points = []
for idx, participant_data in enumerate(data['data']):
    if participant_data is None:
        continue
    
    for timestamp, point in participant_data.items():
        points.append(point)

# Convert to DataFrame
df = pd.DataFrame(points)

print("=== Data Summary ===")
print(f"Total points recorded: {len(df)}")
print(f"Participants: {df['participantId'].unique()}")
print(f"Figures: {df['figure'].unique()}")
print(f"Contact types: {df['contactType'].unique()}")
print(f"Directions: {df['direction'].unique()}")

# Create heatmaps overlaid on body figures
figures = df['figure'].unique()
num_figures = len(figures)

fig, axes = plt.subplots(1, num_figures, figsize=(6*num_figures, 8))
if num_figures == 1:
    axes = [axes]

for idx, figure in enumerate(figures):
    figure_data = df[df['figure'] == figure]
    
    # Try to load the figure image
    image_path = f'{figure}.png'
    
    if os.path.exists(image_path):
        # Load and display the body figure image
        img = Image.open(image_path)
        axes[idx].imshow(img, alpha=0.7, extent=[0, 1, 0, 1], aspect='auto')
        print(f"✓ Loaded {image_path}")
    else:
        print(f"⚠ {image_path} not found - will show heatmap only")
        axes[idx].set_facecolor('lightgray')
    
    # Create 2D histogram (heatmap)
    heatmap, xedges, yedges = np.histogram2d(
        figure_data['xNorm'], 
        figure_data['yNorm'], 
        bins=15,
        range=[[0, 1], [0, 1]]
    )
    
    # Overlay heatmap with transparency
    im = axes[idx].imshow(
        heatmap.T, 
        origin='lower',
        cmap='hot',
        alpha=0.5,
        aspect='auto',
        extent=[0, 1, 0, 1],
        vmin=0
    )
    
    # Add scatter points to show exact contact locations
    axes[idx].scatter(
        figure_data['xNorm'],
        figure_data['yNorm'],
        c=figure_data['confidence'],
        cmap='viridis',
        s=100,
        alpha=0.7,
        edgecolors='black',
        linewidth=1,
        label='Contact points'
    )
    
    axes[idx].set_title(f'{figure.capitalize()} - Contact Heatmap ({len(figure_data)} points)', fontsize=12, fontweight='bold')
    axes[idx].set_xlabel('X Position')
    axes[idx].set_ylabel('Y Position')
    axes[idx].set_xlim(0, 1)
    axes[idx].set_ylim(0, 1)
    axes[idx].invert_yaxis()  # Flip Y to match image coordinates
    
    cbar = plt.colorbar(im, ax=axes[idx], label='Contact Intensity')

plt.tight_layout()
plt.savefig('heatmaps_on_figures.png', dpi=300, bbox_inches='tight')
print("\n✓ Heatmaps overlaid on figures saved as 'heatmaps_on_figures.png'")

# Create separate plots by contact type
fig, axes = plt.subplots(1, 2, figsize=(14, 8))

contact_types = df['contactType'].unique()
for idx, contact_type in enumerate(contact_types):
    contact_data = df[df['contactType'] == contact_type]
    
    # Try to load figure image
    image_path = f'{contact_data.iloc[0]["figure"]}.png'
    
    if os.path.exists(image_path):
        img = Image.open(image_path)
        axes[idx].imshow(img, alpha=0.6, extent=[0, 1, 0, 1], aspect='auto')
    else:
        axes[idx].set_facecolor('lightgray')
    
    # Create heatmap for this contact type
    heatmap, _, _ = np.histogram2d(
        contact_data['xNorm'],
        contact_data['yNorm'],
        bins=12,
        range=[[0, 1], [0, 1]]
    )
    
    im = axes[idx].imshow(
        heatmap.T,
        origin='lower',
        cmap='Reds',
        alpha=0.6,
        aspect='auto',
        extent=[0, 1, 0, 1]
    )
    
    axes[idx].scatter(
        contact_data['xNorm'],
        contact_data['yNorm'],
        c='blue',
        s=80,
        alpha=0.6,
        edgecolors='black',
        linewidth=1
    )
    
    axes[idx].set_title(f'{contact_type.capitalize()} Contacts ({len(contact_data)} points)', fontsize=12, fontweight='bold')
    axes[idx].set_xlim(0, 1)
    axes[idx].set_ylim(0, 1)
    axes[idx].invert_yaxis()
    plt.colorbar(im, ax=axes[idx], label='Count')

plt.tight_layout()
plt.savefig('heatmaps_by_contacttype.png', dpi=300, bbox_inches='tight')
print("✓ Heatmaps by contact type saved as 'heatmaps_by_contacttype.png'")

# Create plots by direction
fig, axes = plt.subplots(1, 2, figsize=(14, 8))

directions = df['direction'].unique()
direction_labels = {
    'touched_by': 'I was touched',
    'touched': 'I touched'
}

for idx, direction in enumerate(directions):
    direction_data = df[df['direction'] == direction]
    
    # Try to load figure image
    image_path = f'{direction_data.iloc[0]["figure"]}.png'
    
    if os.path.exists(image_path):
        img = Image.open(image_path)
        axes[idx].imshow(img, alpha=0.6, extent=[0, 1, 0, 1], aspect='auto')
    else:
        axes[idx].set_facecolor('lightgray')
    
    # Create heatmap for this direction
    heatmap, _, _ = np.histogram2d(
        direction_data['xNorm'],
        direction_data['yNorm'],
        bins=12,
        range=[[0, 1], [0, 1]]
    )
    
    im = axes[idx].imshow(
        heatmap.T,
        origin='lower',
        cmap='Blues',
        alpha=0.6,
        aspect='auto',
        extent=[0, 1, 0, 1]
    )
    
    axes[idx].scatter(
        direction_data['xNorm'],
        direction_data['yNorm'],
        c='red',
        s=80,
        alpha=0.6,
        edgecolors='black',
        linewidth=1
    )
    
    axes[idx].set_title(f'{direction_labels[direction]} ({len(direction_data)} points)', fontsize=12, fontweight='bold')
    axes[idx].set_xlim(0, 1)
    axes[idx].set_ylim(0, 1)
    axes[idx].invert_yaxis()
    plt.colorbar(im, ax=axes[idx], label='Count')

plt.tight_layout()
plt.savefig('heatmaps_by_direction.png', dpi=300, bbox_inches='tight')
print("✓ Heatmaps by direction saved as 'heatmaps_by_direction.png'")

# Statistics
print("\n=== Statistics ===")
print(f"\nContact Types:")
print(df['contactType'].value_counts())
print(f"\nDirections:")
for direction in df['direction'].unique():
    label = direction_labels[direction]
    count = len(df[df['direction'] == direction])
    print(f"  {label}: {count}")

print(f"\nAverage Confidence by Contact Type:")
print(df.groupby('contactType')['confidence'].mean().round(2))

print("\n✓ Analysis complete!")
