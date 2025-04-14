from PIL import Image
import os

def convert_to_1080p(input_path, output_path=None):
    if not os.path.isfile(input_path):
        print(f"❌ Input file not found: {input_path}")
        return

    if output_path is None:
        name, ext = os.path.splitext(input_path)
        output_path = f"{name}_1080p{ext}"

    try:
        with Image.open(input_path) as img:
            img = img.resize((1920, 1080), Image.Resampling.LANCZOS)  # Resize to 1920x1080
            img.save(output_path, quality=95)  # Save with high quality (you can adjust this)
            print(f"✅ Conversion completed: {output_path}\n")
    except Exception as e:
        print(f"❌ Error: {e}\n")

if __name__ == "__main__":
    folder_path = "../public/images"
    valid_extensions = [".jpg, .jpeg", ".png"]

    for filename in os.listdir(folder_path):
        if filename.lower().endswith(tuple(valid_extensions)):
            full_input_path = os.path.join(folder_path, filename)
            name, ext = os.path.splitext(filename)
            output_path = os.path.join(folder_path, f"{name}_1080p{ext}")
            convert_to_1080p(full_input_path, output_path)
