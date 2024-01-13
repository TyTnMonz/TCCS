# TCCS
## Teachable Change Content Size
A small script used to change the Default Teachable platform UI adding options to change the size of the Content.

## Description

[![extension.png](https://i.postimg.cc/qM94kTS1/extension.png)](https://postimg.cc/PPzB4BtD)

The Teachable platform allows the Contect Creators to choose between 2 different options about the content size:

 - Block Content Size
 - Unblock Content Size

The first option lock the Content size to 840px width while the second one makes the content responsive, taking over the full width of the page.

Although it is a choise of the Content Creator, when the first option is selected, the Content may result too small to be readable on small size monitor ( ex. on a 13" laptop or tablet ) forcing users to set the view to Full Screen to be able to follow the content of a Video course for example.

The script adds a dropdown menu inside the Teachable Navigation Bar with the options to change the content size choosing between 4 different options:
- **Small** : sets the max-width of the content to 840px ( the default value for Teachable )
- **Medium** : increse the default max-width by 30% ( 1092px )
- **Big** : increse the default max-width by 80% ( 1512px <sup>1</sup> )
- **Full Screen** : set the Full Screen mode on the iFrame with the video inside

<sup>1. The script is optimized to be used on Full HD screen, but it can be used on greater screen resolution also. 
Technically it could be applyed on lower screen resolution also, but it loses a bit of sense.</sup>

## How to use it

The script is desgined to be used on Google Chrome with or as an Extension, or on other Browser which can use Extensions.

### Tampermonkey
[Tampermonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) is a Google Chrome extension which allows users to use userscripts.<br />
Userscripts are small programs that change the layout of pages, add or remove features, and automate actions to personalize your web experience.

1. Install the Extension from Google Web Store
2. Create a new Script
3. Copy & paste the whole content of the **content.js** file into the script, under the **Editor** tab, inside the main function<br />
[![tampermonkey.png](https://i.postimg.cc/mr3MsRZ9/tampermonkey.png)](https://postimg.cc/f3LkcG9W)
4. Switch to **Settings** tab and find **_Includes/Excludes_** section.
5. Add the base URL __https://\*.teachable.com/\*__ into the **_User matches_** textarea to bind the script to the Teachable platform only.<br /><br />
OPTIONAL: if you want to reduce the URLs match to bind the script to a specific Content Creator Channel List you can insert the base URL of the Channel into the same field.<br />
For example you can set __https:// fabiobiondi.teachable.com/\*__ ( remove the blank space after https:// ) to activate the script only on [Fabio Biondi](https://www.fabiobiondi.dev/) courses.

### Custom Chrome Extension
You can also create your own custom Chrome Extension by downloading all the files on this repo into a folder on your PC and than following this guide : https://support.google.com/chrome/a/answer/2714278?hl=en
