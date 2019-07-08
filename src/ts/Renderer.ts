class Renderer {
    
    useHandlebars = (templateId, content, appendTo)=>{
        const src = $(`#${templateId}-template`).html()
        const template = Handlebars.compile(src)
        const newHtml = template(content)
        $(appendTo).append(newHtml)
    }

}