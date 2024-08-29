const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration:1000,
};

scrollReveal(),reveal(".section_container h3",{
    ...scrollRevealOption,
});
scrollReveal(),reveal(".section_container h1",{
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});

scrollReveal(),reveal(".section_container h2",{
    ...scrollRevealOption,
    origin: "right",
    delay: 500,
});
scrollReveal(),reveal(".section_container button",{
    ...scrollRevealOption,
    origin: "right",
    delay: 500,
});


