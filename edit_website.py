import json
import openai

filename = "sample1/index.html"

# Get OpenAI API key from file
with open("openai_key.json", "r") as file:
    openai.api_key = json.load(file)["key"]

# Read code from file
with open(filename, "r") as file:
    code = file.read()

task = "Revise the following code: " + code

completion = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": task}]
)

response = completion["choices"][0]["message"]["content"]
print(response)

# Extract code between <StartCode> and <EndCode> labels
start_index = response.find("<StartCode>") + len("<StartCode>")
end_index = response.find("<EndCode>")
code_string = response[start_index:end_index]
