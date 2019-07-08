const path = require('path')
const request = require('request')
const express = require('express')
const server = express()
const teamToIDs = {
    lakers: "1610612747",
    warriors: "1610612744",
    heat: "1610612748",
    suns: "1610612756"
};

const formatData = (data, team) => {
    let formatedData = JSON.parse(data);
    const teamId = teamToIDs[team]
    console.log(teamId)
    
    formatedData = formatedData.league.standard
    formatedData = formatedData.filter(d=>d.teamId == teamId && d.isActive)
        .map(d=>{
            return {firstName: d.firstName, lastName: d.lastName, jersey: d.jersey, pos: d.pos}
        })
    return formatedData
};

server.use(express.static(path.join(__dirname, 'build')))
server.use(express.static(path.join(__dirname, 'node_modules')))

server.get('/teams/:teamName', (req, res)=>{
    const team = req.params.teamName
    request.get('http://data.nba.net/10s/prod/v1/2018/players.json', (err, data)=>{
        res.send(formatData(data.body, team))
    })
})

const port = 3000
server.listen(port, ()=>console.log(`Server up and running on port ${port}`))