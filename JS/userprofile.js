// name of hidden name 'tags-input'

//creating the input for tags-input
[]. forEach.call(document.getElementsByClassName('tags-input'), function (el) {
    let hiddenInput = document.createElement('input'),
        mainInput = document.createElement('input');
    //array of tags 
    tags = [];

    hiddenInput.setAttribute('type' , 'hidden');
    hiddenInput.setAttribute('name', el.getAttribute('data-name'));

    mainInput.setAttribute('type', 'text');
    mainInput.classList.add('main-input');
    // Creating the element, so you can write tags by splitting by (,) 
    mainInput.addEventListener('input', function() {
        let enteredTags = mainInput.value.split(',');
    //if the length of the entered tags is greater than 1, means we found a comma, if not it means that the user haven't finishedt the Tag yet 
        if (enteredTags.length > 1) {
            //filtering the tags, so it is not all white space or weird punctation 
            enteredTags.forEach(function (t) {
                let filteredTag = filterTag(t);
            //if filteredTag is longer than 0 then enter the filteredTag --> now go to functions and add a return in function FilterTag
                if (filteredTag.length > 0)
                    addTag(filteredTag);
            });
            //adding the function, so the text is converted to a tag and the text is not shown afterwards
            mainInput.value = '';
        }
    });

    //creating a element so that pushing 'backspace = 8' deletes the last tag 
    mainInput.addEventListener('keydown', function (e){
        let keyCode = e.which || e.keyCode;
        if (keyCode === 8 && mainInput.value.length === 0 && tags.length > 0){
            removeTag(tags.length - 1);
        }
    });

    el.appendChild(mainInput);
    el.appendChild(hiddenInput);

   
 //functions

    function addTag (text){
        let tag = {
            text: text,
            element: document.createElement('span'),
        };

        tag.element.classList.add('tag');
        tag.element.textContent = tag.text;

    //adding the Tag-clode buttom (x)
        let closeBtn = document.createElement('span');
        closeBtn.classList.add('close');
    //making the close buttom actually work 
        closeBtn.addEventListener('click', function () {
            removeTag(tags.indexOf(tag));

        }); // Remember we now need to add this in the function (removeTag)
        tag.element.appendChild(closeBtn);
    
        tags.push(tag);
    //append it to el. appendChild(hiddenInput)
        el.insertBefore(tag.element, mainInput);
        refreshTags();
    }

    function removeTag (index) {
        let tag = tags[index];
        tags.splice(index, 1);
        el.removeChild(tag.element);
        refreshTags();
    }

    //because the hidden tag is going to have the value of all of our tags (fill in the hidden input)
    function refreshTags () {
        //so if we want to make a tag with a space inbetween it let us do that 
        let tagsList =[];
        tags.forEach(function(t){
            tagsList.push(t.text);
        });
        hiddenInput.value = tagsList.join(',');

    }

    function filterTag (tag){
        //removing all punctuation except for the dash(-) and underscore. 
        // removed white spaces and replace with dash (-)
        return tag.replace(/[^\w -]/g,'').trim().replace(/[^\w -]/g,'-');

    }
});

