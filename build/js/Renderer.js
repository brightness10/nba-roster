class Renderer {
    
    renderRoster(data){
        this.useHandlebars('roster', {data}, '#roster')
    }

    useHandlebars = (templateName, data, appendTo)=>{
        const src = $('#'+templateName+'-template').html()
        const template = Handlebars.compile(src)
        const newHtml = template(data)
        $(appendTo).append(newHtml)
    }
}