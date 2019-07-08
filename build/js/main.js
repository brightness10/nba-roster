

const showRoster = () => {
    $.ajax({
        method: "GET",
        url: "/teams/heat",
        success: data => {
            console.log(data)
        },
        error: (xhr, text, error) => console.log(xhr, text, error)
    });
};
