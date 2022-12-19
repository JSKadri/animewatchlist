from urllib import request
import re

url = "https://www.zerochan.net/Wallpaper?s=random"

# Send a GET request to the specified URL and read the response
response = request.urlopen(url)

# Save the source code of the webpage to a file
with open("page_source.txt", "w", encoding="utf-8") as file:
    file.write(response.read().decode("utf-8"))

# Open the file in read mode
with open("page_source.txt", "r", encoding="utf-8") as file:
    # Read all the lines of the file into a list
    lines = file.readlines()

# Find the line with the specified string
line = '<li class="compact   ">'
links = []
for count, i in enumerate(lines):
    if i.__contains__('<li class="compact'):    # Find this element in the html file
        links.append(lines[count+9])            # Now grab the link to the image

# Sort the links to only grab the image url
urlToStore = []
for i in links:
    match = re.search(r'href="(.*?)"', i)
    if match:
        urlToStore.append(match.group(1))   # Save the url to a list

# Get the all the current links in the file
with open("urls.txt", "r") as file:
    allLines = file.readlines() # Read them in
    tempList = []               # Create a temporary list
    for sub in allLines:        # Loop through the list
        tempList.append(sub.replace("\n","")) # Now add all the elements without the newline char
    allLines = tempList # Replace the list

with open("urls.txt", "a") as file:
    urlToStore_copy = urlToStore.copy() # Make a copy of the list
    for item in urlToStore_copy:        # Loop through out copy list
        if item in allLines:            # If we find the same element already in the saved list
         urlToStore.remove(item)        # Delete that element

    for i in urlToStore:                # Now save our links to the file.
        file.write(i+"\n")
