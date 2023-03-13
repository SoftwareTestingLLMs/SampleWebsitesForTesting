import json
import openai

# Get OpenAI API key from file
with open("openai_key.json", "r") as file:
    openai.api_key = json.load(file)["key"]

task = "Hi how are you?"

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
