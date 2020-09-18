import React { useState, useEffect } from 'react';
import * as yup from "yup";
import axios from 'axios';


const formSchema=yup.object().shape({
    name: yup.string().required("Please enter your name"),
    size: yup.string().required("Please select a size"),
    pepperoni: yup.string().defined(),
    sausage: yup.string().defined(),
    ham: yup.string().defined(),
    onions: yup.string().defined(),
    greenpepper: yup.string().defined(),
    pineapple: yup.string().defined(),
    mushrooms: yup.string().defined(),
    custom: yup.string().notRequired()
}); 

export default function Form() {
    const initialFormState = {
        name: "",
        size: "",
        pepperoni: "",
        sausage: "",
        ham: "",
        omions: "",
        greenpepper: "",
        pineapple: "",
        mushrooms: "",
        custom: "",

};

const [serverError, setServerError] = useState(""); 
const [post, setPost] = useState(""); 
const [formState, setFormState] = useState(initialFormState);
const [isButtonDisabled, setIsButtonDisabled] = useState(true);
const [errors, setErrors] = useState({
    name: "",
    size: "",
    pepperoni: "",
    sausage: "",
    ham: "",
    onions: "",
    greenpepper: "",
    pineapple: "",
    mushrooms: "",
    custom: "",
});
