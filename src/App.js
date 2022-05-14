import React from 'react';
import './App.css';
import FruitCounter from "./components/FruitCounter";
import Button from "./components/Button";
import InputField from "./components/InputField";

function App() {
    const [strawberry, setStrawberry] = React.useState(0);
    const [banana, setBanana] = React.useState(0);
    const [apples, setApples] = React.useState(0);
    const [kiwi, setKiwi] = React.useState(0);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");
    const [age, setAge] = React.useState(0);
    const [zipCode, setZipCode] = React.useState("");
    const [frequency, setFrequency] = React.useState("Iedere week");
    const [time, setTime] = React.useState("");
    const [comments, setComments] = React.useState("");
    const [termsAndConditions, setTermsAndConditions] = React.useState(false);

    function resetFruitCount() {
        setKiwi(0);
        setApples(0);
        setBanana(0);
        setStrawberry(0);

    }

    function handleSubmit(e) {
        e.preventDefault();

        console.log(`
        voornaam: ${firstName}
        achternaam: ${lastName}
        leeftijd: ${age}
        postcode: ${zipCode}
        frequentie: ${frequency}
        tijdvak: ${time}
        opmerkingen: ${termsAndConditions}
        voorwaarden: ${termsAndConditions}
        
        aantal aardbeien: ${strawberry}
        aantal bananen: ${banana}
        aantal appels: ${apples}
        aantal kiwi's: ${kiwi}
        `)

    }

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <FruitCounter
                img="🍓"
                fruitName="Aardbeien"
                setFruit={setStrawberry}
                fruit={strawberry}
            />
            <FruitCounter
                img="🍌"
                fruitName="Bananen"
                setFruit={setBanana}
                fruit={banana}
            />
            <FruitCounter
                img="🍏"
                fruitName="Appels"
                setFruit={setApples}
                fruit={apples}
            />
            <FruitCounter
                img="🥝"
                fruitName="Kiwi's"
                setFruit={setKiwi}
                fruit={kiwi}
            />
            <Button
                buttonType="reset"
                setFunction={resetFruitCount}
                buttonName="reset"
                disabled={false}
            />

            <main>
                <form onSubmit={handleSubmit}>
                    <InputField
                        label="firstName"
                        description="Voornaam"
                        type="text"
                        value={firstName}
                        callFunction={setFirstName}
                    />

                    <InputField
                        label="lastName"
                        description="Achternaam"
                        type="text"
                        value={lastName}
                        callFunction={setLastName}
                    />

                    <InputField
                        label="age"
                        description="Leeftijd"
                        type="number"
                        value={age}
                        callFunction={setAge}
                    />

                    <InputField
                        label="zipCode"
                        description="Postcode"
                        type="text"
                        value={zipCode}
                        callFunction={setZipCode}
                    />

                    <label htmlFor="delivery-frequency">Bezorgfrequentie</label>
                    <select
                        name="delivery-frequency"
                        id="delivery-frequency"
                        value={frequency}
                        onChange={(e) => setFrequency(e.target.value)}
                    >
                        <option value="weekly">Iedere week</option>
                        <option value="everyOtherWeek">Om de week</option>
                        <option value="monthly">Iedere maand</option>
                    </select>

                    <InputField
                        label="dayTime"
                        description="overdag"
                        type="radio"
                        value={time}
                        callFunction={setTime}
                        name="deliveryTime"
                    />

                    <InputField
                        label="evening"
                        description="'s avonds"
                        type="radio"
                        value={time}
                        callFunction={setTime}
                        name="deliveryTime"
                    />

                    <label htmlFor="comments">
                        Opmerkingen
                        <textarea
                            name="comments"
                            id="comments"
                            cols="30"
                            rows="10"
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        > </textarea>
                    </label>

                    {/*<InputField*/}
                    {/*    label="termsAndConditions"*/}
                    {/*    description="Ik ga akkoord met de voorwaarden"*/}
                    {/*    type="checkbox"*/}
                    {/*    checked={termsAndConditions}*/}
                    {/*    callFunction={setTermsAndConditions(!termsAndConditions)}*/}
                    {/*/>*/}

                    <label htmlFor="termsAndConditions">
                        <input
                            type="checkbox"
                            id="termsAndConditions"
                            checked={termsAndConditions}
                            onChange={() => setTermsAndConditions(!termsAndConditions)}
                        />
                        Ik ga akkoord met de voorwaarden
                    </label>

                    <Button
                        buttonType="submit"
                        disabled={!termsAndConditions}
                        buttonName="Verzend"
                    />

                </form>
            </main>
        </>
    );
}

export default App;
