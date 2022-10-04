# Portfolio Site

URL: [Link](https://shreyassingri.github.io/portfolio/)

This is a complete ReactJS based project that provides a portfolio to anyone.
The complete user data is in [JSON file](https://github.com/ShreyasSingri/portfolio/blob/main/src/PersonalData.json) and [Assets directory](https://github.com/ShreyasSingri/portfolio/tree/main/src/Assets).

![Screenshot](Screenshot.jpg)

You can fork the repository and update the above mentioned parts to make it suitable to your requirenment and deploy it.

## Steps to format JSON file

The following keys of the JSON file are for the following reasons:

- Name: To display the user's name at the header left corner

- HeaderMenu: To give the list of header buttons and it's appropriate pages
  - Contains an Array of Objects containing 'label' (The display name of that category) and 'value' (The key with which we identify it's appropriate page and assets)

- Pages: It is to render the body part of the webpage. It is an object having keys as the value we specified in the HeaderMenu part
  - It is an object that contains one mandatory field 'type' (card or info) which specifies the type of page.
    - Info type has a variety of display items like title, subtitle, table and download. 
      - Download provides a buuton and the file to be downloaded irrespective or the file type
      - Table is a 2-D array that renders a data in your desired format. It also has an additional feature of Quoting (If the data begins with curly double quotes)
    - Card type has an array of objects with a mandotary field name. It has additional fields like description, url (name of the file or the http/https URL) and icon.

- SocialMedia: It is to display the right footer along with social media links having an array of objects with keys label, link and icon.


## Steps to Deploy

Edit the [package.json](https://github.com/ShreyasSingri/portfolio/blob/main/package.json) file parameter of homepage and profie it in the format of https://<user_id>.github.io/<repo_name>

Then run the following command to deploy

```
npm run deploy
```