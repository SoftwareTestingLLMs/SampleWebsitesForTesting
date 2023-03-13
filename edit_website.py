import json
import openai

filename = "sample1/index.html"

# Read OpenAI API key from file
with open("openai_key.json", "r") as file:
    openai.api_key = json.load(file)["key"]

# Read HTML code from file
with open(filename, "r") as file:
    code = file.read()

task = f"Revise the following code: {code}. Begin the code with the label <StartCode> and end the code with the label <EndCode>."

completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": task}]
)

response = completion["choices"][0]["message"]["content"]
print(response)

# Extract code between <StartCode> and <EndCode> labels
# Check if both labels are present in response, throw an error otherwise
if "<StartCode>" not in response:
    raise ValueError("StartCode label is missing in response")
if "<EndCode>" not in response:
    raise ValueError("EndCode label is missing in response")

start_index = response.find("<StartCode>") + len("<StartCode>")
end_index = response.find("<EndCode>")
code_string = response[start_index:end_index]

# Overwrite file with revised code
with open(filename, "w") as file:
    file.write(code_string)

print(f"{filename} updated successfully!")
