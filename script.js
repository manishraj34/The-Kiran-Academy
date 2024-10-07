
function showResult(){
    let text = document.getElementById('myTextarea').value;

    // Get the checkbox states
    const isUppercase = document.getElementById('uppercaseCheckbox').checked;
    const isLowercase = document.getElementById('lowercaseCheckbox').checked;
    const iscountNoOfWords=document.getElementById('countNoOfWords').checked;
    const iscountWordFrequency=document.getElementById('countWordFrequency').checked;
    const ispunctuation=document.getElementById('punctuation').checked;

    // Apply the appropriate transformation
    if (isUppercase) {
        text = text.toUpperCase();
    } 
    else if (isLowercase) {
        text = text.toLowerCase();
    }
    else if (iscountNoOfWords) {
        const wordsArray = text.trim().split(/\s+/);
        text = wordsArray.filter(word => word.length > 0).length;
    }
    else if (iscountWordFrequency) {
            const wordsArray = text.trim().toLowerCase().split(/\s+/);

            // Create an object to store word frequency
            const wordCount = {};

            // Iterate through wordsArray and count the frequency of each word
            wordsArray.forEach(word => {
                if (wordCount[word]) {
                    wordCount[word]++;
                } else {
                    wordCount[word] = 1;
                }
            });
            for (const word in wordCount) {
                text += `${wordCount[word]}`;
            }
    }
    else if (ispunctuation) {
        text = text.replace(/[.,\/#@!$%\^&\*;:{}=\-_`~()]/g, "");
    }
    else{
        text=""
    }

    // Show the result
    document.getElementById('resultText').innerText = text;

    // Ensure only one checkbox is checked at a time
    document.getElementById('uppercaseCheckbox').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('lowercaseCheckbox').checked = false;
            document.getElementById('countNoOfWords').checked = false;
            document.getElementById('countWordFrequency').checked = false;
            document.getElementById('punctuation').checked = false;
        }
    });

    document.getElementById('lowercaseCheckbox').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('uppercaseCheckbox').checked = false;
            document.getElementById('countNoOfWords').checked = false;
            document.getElementById('countWordFrequency').checked = false;
            document.getElementById('punctuation').checked = false;
        }
    });

    document.getElementById('countNoOfWords').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('uppercaseCheckbox').checked = false;
            document.getElementById('lowercaseCheckbox').checked = false;
            document.getElementById('countWordFrequency').checked = false;
            document.getElementById('punctuation').checked = false;
        }
    });
    document.getElementById('countWordFrequency').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('uppercaseCheckbox').checked = false;
            document.getElementById('lowercaseCheckbox').checked = false;
            document.getElementById('countNoOfWords').checked = false;
            document.getElementById('punctuation').checked = false;
        }
    });
    document.getElementById('punctuation').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('uppercaseCheckbox').checked = false;
            document.getElementById('lowercaseCheckbox').checked = false;
            document.getElementById('countNoOfWords').checked = false;
            document.getElementById('countWordFrequency').checked = false;
        }
    });
}