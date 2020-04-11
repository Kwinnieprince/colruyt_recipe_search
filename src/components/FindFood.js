import React, { useState, useEffect } from 'react'
import {Checkbox, Container, Button, Box, FormControlLabel, Grid, Link} from '@material-ui/core'

const WeatherData = () => {

    const[randomRecipe, setRandomRecipe] = useState();
    const[recipeURL, setRandomRecipeURL] = useState("");
    const[disableButton, setDisableButton] = useState(false);
    const[recipeType, setRecipeType] = useState({
        Tussendoortje: false,
        Bijgerecht: false,
        Aperitiefhapje: false,
        Hoofdgerecht: true,
        Voorgerecht: false,
        Lunch: false,
    })

    async function findRandomRecipe(){
        setDisableButton(true);
        const amountOfRecipes = await fetch(`https://ecgrecipemw.colruyt.be/ecgrecipemw/nl/v1/recipes?application=Colruyt+Culinair&size=1${recipeType.Hoofdgerecht?"&menu=Hoofdgerecht":""}${recipeType.Tussendoortje?"&menu=Tussendoortje":""}${recipeType.Bijgerecht?"&menu=Bijgerecht":""}${recipeType.Aperitiefhapje?"&menu=Aperitiefhapje":""}${recipeType.Voorgerecht?"&menu=Voorgerecht":""}${recipeType.Lunch?"&menu=Lunch":""}`)
        .then(response => {
            return response.json();
        }).then(
            json => {
                return json.numberOfResults
            });
        const randomNumber = Math.floor(Math.random() * amountOfRecipes);
        await fetch(`https://ecgrecipemw.colruyt.be/ecgrecipemw/nl/v1/recipes?application=Colruyt+Culinair&size=${amountOfRecipes}${recipeType.Hoofdgerecht?"&menu=Hoofdgerecht":""}${recipeType.Tussendoortje?"&menu=Tussendoortje":""}${recipeType.Bijgerecht?"&menu=Bijgerecht":""}${recipeType.Aperitiefhapje?"&menu=Aperitiefhapje":""}${recipeType.Voorgerecht?"&menu=Voorgerecht":""}${recipeType.Lunch?"&menu=Lunch":""}`)
        .then(response => {
            return response.json();
        }).then(json => {
            setRandomRecipe(json.recipeList[randomNumber]);
        })
        setDisableButton(false);
    }

    const handleTussenChange = (event) => {
        setRecipeType({Tussendoortje: event.target.checked});
    }

    const handleHoofdChange = (event) => {
        setRecipeType({Hoofdgerecht: event.target.checked});
    }

    const handleBijChange = (event) => {
        setRecipeType({Bijgerecht: event.target.checked});
    }

    const handleAperoChange = (event) => {
        setRecipeType({Aperitiefhapje: event.target.checked});
    }

    const handleVoorChange = (event) => {
        setRecipeType({Voorgerecht: event.target.checked});
    }

    const handleLunchChange = (event) => {
        setRecipeType({Lunch: event.target.checked});
    }


    return(
        <>
            <Container>
                <Box component="div" mb={2}>
                    <h4 style={{marginBottom: `0.5em`}}>Kies wat je wilt eten</h4>
                    <FormControlLabel
                        value="Hoofdgerecht"
                        control={<Checkbox color="primary" onChange={handleHoofdChange} />}
                        label="Hoofdgerecht"
                        labelPlacement="end"
                        mr={4}
                    />
                    <FormControlLabel
                        value="Tussendoortje"
                        control={<Checkbox color="primary" onChange={handleTussenChange} />}
                        label="Tussendoortje"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Bijgerecht"
                        control={<Checkbox color="primary" onChange={handleBijChange} />}
                        label="Bijgerecht"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Aperitiefhapje"
                        control={<Checkbox color="primary" onChange={handleAperoChange} />}
                        label="Aperitiefhapje"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Voorgerecht"
                        control={<Checkbox color="primary" onChange={handleVoorChange} />}
                        label="Voorgerecht"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Lunch"
                        control={<Checkbox color="primary" onChange={handleLunchChange} />}
                        label="Lunch"
                        labelPlacement="end"
                    />
                </Box>
                <Box component="div" mb={4}>
                    <h4>Zoek mijn recept!</h4>
                    <Button variant="contained" color="primary" mb={1} onClick={findRandomRecipe} disabled={disableButton}>
                        Zoek!
                    </Button>
                </Box>
            </Container>
            {randomRecipe 
                ? <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <div>
                                <p> <strong>Titel:</strong> {randomRecipe.title} </p>
                                <p> <strong>Tijd nodig:</strong> {randomRecipe.timing} </p>
                                <p> <strong>Porties:</strong> {randomRecipe.serves} </p>
                                <p> <strong>URL:</strong> <Link href={"https://www.colruyt.be/nl/lekker-koken/"+randomRecipe.title.toLowerCase().split(' ').join('-').split("'").join("").split('è').join('e')}  rel="noreferrer"> https://www.colruyt.be/nl/lekker-koken/{randomRecipe.title.toLowerCase().split(' ').join('-')} </Link></p>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <img src={randomRecipe.image}/>
                            </div>
                        </Grid>
                  </Grid>
                : <div></div>
            }
        </>
    );
};

export default WeatherData;