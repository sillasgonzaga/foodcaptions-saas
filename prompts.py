transcription_prompt = """
The text below is a transcription of a cooking recipe video from YouTube.

As it is a transcription made by an algorithm, the text has not been properly formatted.
It is possible that the transcription algorithm did not work 100% perfectly, including noise or even speech-to-text transcription errors.
Your role is to read the entire text, discard the transcription errors, and format it as a recipe, containing the list of ingredients and step-by-step instructions.
In addition to describing the ingredients and recipes, write at the end of your response any general tips given by the cook.

It is possible that the video is not about a culinary recipe. If this is the case, return 'NULL' in your response, without quotes.

It is possible that the text will be in another language than English. Regardless, your output must be in English.

Format your response in the following template:

#### Ingredients

####Instructions

#### General Tips
"""


video_description_prompt = """
The text below is a description of a culinary video on YouTube.
Some videos contain the recipe's preparation method, others only the ingredients, and others neither the preparation method nor the ingredients. Some videos contain a link to the complete written recipe.


Return 'TRUE' without quotes if the video contains the detailed preparation method of the recipe, with all steps, or if it contains a link to the complete written recipe, and 'FALSE' otherwise.
If the video contains only the list of ingredients without the detailed preparation method, return 'FALSE'.
If the video contains neither the list of ingredients nor the preparation method, return 'FALSE'.

"""