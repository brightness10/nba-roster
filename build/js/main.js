const renderer = new Renderer

const getRoster = () => {
    const teamInput = $('#team-input')
    const teamVal = teamInput.val().toLowerCase()
    $.ajax({
        method: "GET",
        url: `/teams/${teamVal}`,
        success: data => {
            renderer.renderRoster(data)
        },
        error: (xhr, text, error) => console.log(xhr, text, error)
    });
};
