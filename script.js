var navigationItems = [
    {
        name: "Home",
        href: "/",
        icon: "fas fa-home",
    },
    {
        name: "Lofi Hip Hop",
        href: "./lofi hip hop",
        icon: "fas fa-music",
    },
    {
        name: "Lotus Flower",
        href: "./lotus flower/#music",
        icon: "fas fa-tree",
    },
    {
        name: "UNO Game",
        href: "https://uno-game-website.herokuapp.com",
        icon: "fas fa-dice-six",
        onclick: function() { alert("Please wait while website is launching."); }
    },
    {
        name: "Kahoot Flood",
        href: "https://kahoot-flood-website.herokuapp.com/",
        icon: "fab fa-kickstarter-k",
        onclick: function() { alert("Please wait while website is launching."); }
    },
    {
        name: "Remote Prank",
        href: "https://remote-prank.herokuapp.com/",
        icon: "fas fa-smile-wink",
        onclick: function() { alert("Please wait while website is launching."); }
    },
    {
        name: "YouTube Audio Loop",
        href: "./youtube loop",
        icon: "fab fa-youtube",
    },
    {
        name: "Soundboard",
        href: "https://github.com/WobbyChip/Delphi/tree/master/Soundborad",
        icon: "fas fa-volume-up",
    },
    {
        name: "Mini Recycle Bin",
        href: "https://github.com/WobbyChip/Delphi/tree/master/MiniRecycleBin",
        icon: "fas fa-trash-alt",
    },
    {
        name: "MSI Control",
        href: "https://github.com/WobbyChip/Delphi/tree/master/MSIControl",
        icon: "fas fa-cogs",
    },
    {
        name: "Windows XP Horror Edition",
        href: "https://github.com/WobbyChip/Delphi/tree/master/Windows%20XP%20Horror%20Edition",
        icon: "fab fa-windows",
    },
    {
        name: "MBR - Image Builder",
        href: "https://github.com/WobbyChip/Delphi/tree/master/MBR%20-%20Image%20Builder",
        icon: "fas fa-dice-d6",
    },
    {
        name: "MBR/UEFI - Note Builder",
        href: "https://github.com/WobbyChip/Delphi/tree/master/MBR%20UEFI%20-%20Note%20Builder",
        icon: "fas fa-dice-d6",
    },
]


function CreateItem(item) {
    var i = document.createElement("i");
    i.className = item.icon;

    var icon = document.createElement("span");
    icon.className = "icon";
    icon.appendChild(i);

    var title = document.createElement("span");
    title.className = "title";
    title.title = item.name;
    title.innerHTML = item.name;

    var a = document.createElement("a");
    a.href = item.href;
    a.appendChild(icon);
    a.appendChild(title);

    var li = document.createElement("li");
    if (item.onclick) { li.addEventListener("click", item.onclick) };
    li.appendChild(a);

    var navigation = document.querySelector(".navigationContainer .navigation ul");
    navigation.appendChild(li);
}


navigationItems.forEach(function(item) {
    CreateItem(item);
});

document.getElementsByClassName("toggle")[0].click();