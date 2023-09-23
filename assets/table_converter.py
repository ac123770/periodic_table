import pandas as pd
import json

# Load the Excel file into a DataFrame
excel_file = "C:/Users/Karim.DESKTOP-HOMLQQO/Desktop/periodic_table/assets/elements.xlsx"  # Replace with the path to your Excel file
df = pd.read_excel(excel_file, engine="openpyxl")

# Convert the DataFrame to JSON and save it to a file
# json_file = "C:/Users/Karim.DESKTOP-HOMLQQO/Desktop/periodic_table/assets/temp.json"  # Replace with the desired output JSON file path
#df.to_json(json_file, orient="records", lines=True)

# json_data = df.set_index(df.columns[0]).to_dict(orient="records")

# # Save the JSON data to a file
# with open(json_file, "w") as json_out:
#     json.dump(json_data, json_out, indent=4)

data_dict = {}
for index, row in df.iterrows():
    key = row[df.columns[0]]
    values = {col: row[col] for col in df.columns[1:]}
    data_dict[key] = values

# Generate JavaScript code with proper line breaks and indentation
js_code = "export const elements = " + json.dumps(data_dict, indent=4) + ";"

# Write the JavaScript code to a .js file
js_file = "C:/Users/Karim.DESKTOP-HOMLQQO/Desktop/periodic_table/assets/elements.js"  # Replace with the desired output JSON file path
with open(js_file, "w") as f:
    f.write(js_code)