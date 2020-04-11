import React, { useState, useEffect } from 'react'
import {Checkbox, Container, Button, Box, FormControlLabel, Grid, Link, Switch} from '@material-ui/core'

const WeatherData = () => {

    const[randomRecipe, setRandomRecipe] = useState();
    const[disableButton, setDisableButton] = useState(false);
    const[disableVegetarian, setDisableVegetarian] = useState(false)
    const[recipeType, setRecipeType] = useState({
        Tussendoortje: false,
        Bijgerecht: false,
        Aperitiefhapje: false,
        Hoofdgerecht: false,
        Voorgerecht: false,
        Lunch: false,
    });
    const[seasonType, setSeasonType] = useState({
        Zomer: false,
        Lente: false,
        Herfst: false,
        Winter: false,
    })
    const[vegetarian, setVegetarian] = useState();

    async function findRandomRecipe(){
        setDisableButton(true);
        const amountOfRecipes = await fetch(`https://ecgrecipemw.colruyt.be/ecgrecipemw/nl/v1/recipes?application=Colruyt+Culinair&size=1&page=1${recipeType.Hoofdgerecht?"&menu=Hoofdgerecht":""}${recipeType.Tussendoortje?"&menu=Tussendoortje":""}${recipeType.Bijgerecht?"&menu=Bijgerecht":""}${recipeType.Aperitiefhapje?"&menu=Aperitiefhapje":""}${recipeType.Voorgerecht?"&menu=Voorgerecht":""}${recipeType.Lunch?"&menu=Lunch":""}${seasonType.Zomer?"&seasons=zomer":""}${seasonType.Herfst?"&seasons=herfst":""}${seasonType.Lente?"&seasons=lente":""}${seasonType.Winter?"&seasons=winter":""}${vegetarian?"&recipeType=Vegetarisch":""}`)
        .then(response => {
            return response.json();
        }).then(
            json => {
                return json.numberOfResults
            });
        const randomNumber = Math.floor(Math.random() * amountOfRecipes);
        await fetch(`https://ecgrecipemw.colruyt.be/ecgrecipemw/nl/v1/recipes?application=Colruyt+Culinair${recipeType.Hoofdgerecht?"&menu=Hoofdgerecht":""}${recipeType.Tussendoortje?"&menu=Tussendoortje":""}${recipeType.Bijgerecht?"&menu=Bijgerecht":""}${recipeType.Aperitiefhapje?"&menu=Aperitiefhapje":""}${recipeType.Voorgerecht?"&menu=Voorgerecht":""}${recipeType.Lunch?"&menu=Lunch":""}${seasonType.Zomer?"&seasons=zomer":""}${seasonType.Herfst?"&seasons=herfst":""}${seasonType.Lente?"&seasons=lente":""}${seasonType.Winter?"&seasons=winter":""}${vegetarian?"&recipeType=Vegetarisch":""}&size=${amountOfRecipes}&page=1`)
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

    const handleZomerChange = (event) => {
        setSeasonType({Zomer: event.target.checked});
    }

    const handleLenteChange = (event) => {
        setSeasonType({Lente: event.target.checked});
    }

    const handleHerfstChange = (event) => {
        setSeasonType({Herfst: event.target.checked});
    }

    const handleWinterChange = (event) => {
        setSeasonType({Winter: event.target.checked});
    }

    const handleVegetarianChange = (event) => {
        // setDisableVegetarian(event.target.checked)
        setVegetarian(event.target.checked);
    }


    return(
        <>
            <Container>
                <Box component="div" mb={2}>
                    <h4 style={{marginBottom: `0.5em`}}>Kies wat je wilt eten</h4>
                    <FormControlLabel
                        value="Hoofdgerecht"
                        control={<Checkbox color="primary" onChange={handleHoofdChange} disabled={disableVegetarian} />}
                        label="Hoofdgerecht"
                        labelPlacement="end"
                        mr={4}
                    />
                    <FormControlLabel
                        value="Tussendoortje"
                        control={<Checkbox color="primary" onChange={handleTussenChange} disabled={disableVegetarian} />}
                        label="Tussendoortje"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Bijgerecht"
                        control={<Checkbox color="primary" onChange={handleBijChange} disabled={disableVegetarian} />}
                        label="Bijgerecht"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Aperitiefhapje"
                        control={<Checkbox color="primary" onChange={handleAperoChange} disabled={disableVegetarian} />}
                        label="Aperitiefhapje"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Voorgerecht"
                        control={<Checkbox color="primary" onChange={handleVoorChange} disabled={disableVegetarian} />}
                        label="Voorgerecht"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Lunch"
                        control={<Checkbox color="primary" onChange={handleLunchChange} disabled={disableVegetarian} />}
                        label="Lunch"
                        labelPlacement="end"
                    />
                </Box>
                <Box component="div" mb={2}>
                    <h4 style={{marginBottom: `0.5em`}}>Kies je seizoen</h4>
                    <FormControlLabel
                        value="Lente"
                        control={<Checkbox color="primary" onChange={handleLenteChange} />}
                        label="Lente"
                        labelPlacement="end"
                        mr={4}
                    />
                    <FormControlLabel
                        value="Zomer"
                        control={<Checkbox color="primary" onChange={handleZomerChange} />}
                        label="Zomer"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Herfst"
                        control={<Checkbox color="primary" onChange={handleHerfstChange} />}
                        label="Herfst"
                        labelPlacement="end"
                    />
                    <FormControlLabel
                        value="Winter"
                        control={<Checkbox color="primary" onChange={handleWinterChange} />}
                        label="Winter"
                        labelPlacement="end"
                    />
                </Box>
                <Box component="div" mb={2}>
                    <h4 style={{marginBottom: `0.5em`}}>Eet je vegetarisch?</h4>
                    <FormControlLabel
                        value="Vegetarisch"
                        control={<Switch color="primary" checked={vegetarian} onChange={handleVegetarianChange} />}
                        label="Vegetarisch"
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
                                <p> <strong>URL:</strong> <Link href={"https://www.colruyt.be/nl/lekker-koken/"+randomRecipe.title.toLowerCase().split(' ').join('-').split("'").join("").split('è').join('e').split(',').join("")}  rel="noreferrer"> https://www.colruyt.be/nl/lekker-koken/{randomRecipe.title.toLowerCase().split(' ').join('-')} </Link></p>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div>
                                <a href={"https://www.colruyt.be/nl/lekker-koken/"+randomRecipe.title.toLowerCase().split(' ').join('-').split("'").join("").split('è').join('e').split(',').join("")}>
                                    <img src={randomRecipe.image}/>
                                </a>
                            </div>
                        </Grid>
                  </Grid>
                : <div></div>
            }
        </>
    );
};

export default WeatherData;