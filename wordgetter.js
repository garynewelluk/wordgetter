
async function GetWord()
{  
    let result = await axios.get("https://random-word-api.herokuapp.com/word");
    let data = result.data;
    return data[0];
}

async function GetDefinition(word)
{    
    try
    {
        const call = "https://api.dictionaryapi.dev/api/v2/entries/en/"+word;  
        const result = await axios.get(call);
        const data = result.data[0];
        const meanings = data.meanings;    
        const definitions = meanings[0].definitions;
        return definitions[0].definition;    
    }
    catch(err)
    {
        return "No definition found";
    }
}