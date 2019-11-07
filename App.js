new Component({
    container: "#myDiv",
    render: function (state) {
        var listItemContainer = document.createElement("ul");

        state.forEach(function (item) {
            var listItem = document.createElement("li");
            listItem.textContent = item.text;

            listItemContainer.append(listItem);
        });

        return listItemContainer;
    },
    state: [
        {
            text: "1. Metin"    
        },
        {
            text: "2. Metin"
        },
        {
            text: "3. Metin"
        }
    ],
    actions: {
        "li": {
            click: function () {
                alert("Click!");
            }
        }
    }
});




