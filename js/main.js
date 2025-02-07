let lessonsAndDescription = [
    {
        lesson: "1",
        description: "Outputting In JavaScript"
    },
    {
        lesson: "3",
        description: "Data Types P. 1 - 100 Days with JS - Day 3"
    },
    {
        lesson: "2",
        description: "Variables - 100 Days with JS - Day 2"
    },
    {
        lesson: "4",
        description: "Data Types P. 2 - 100 Days with JS - Day 4"
    }
]

lessonsAndDescription.sort((a, b) => a.lesson - b.lesson)

lessonsAndDescription.forEach(el => {
    const li = document.createElement("li");
    li.textContent = el.description;
    const a = document.createElement("a");
    a.href = "/day" + el.lesson;
    a.appendChild(li);
    document.getElementById("lessonsWithDescription").appendChild(a);
})