import React, { useState } from "react"
import options from "../components/datadummy/options"
import { Navigate, useNavigate } from "react-router-dom"

const useSignUp = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [selectedOption, setSelectedOption] = useState(options[0])
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [status, setStatus] = useState("")
  const [location, setLocation] = useState("")
  const [gender, setGender] = useState("")
  const [birthYear, setBirthYear] = useState(2025)
  const navigate = useNavigate()

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const handleChange = (selected: any) => {
    setSelectedOption(selected)
  }

  console.log({ name, email, address, password, selectedOption, birthYear, phoneNumber, gender, })

  const handleRegistration = () => {
    if (selectedOption.value === "worker") {
      navigate("/selectworker", { state: { name, email, address, password, selectedOption, birthYear, phoneNumber, gender, } })
    } else if (selectedOption.value === "student") {
      navigate("/selectstudent", { state: { name, email, address, password, selectedOption, birthYear, phoneNumber, gender, } })
    }
  }

  return {
    isVisible,
    selectedOption,
    shouldRedirect,
    toggleVisibility,
    handleChange,
    handleRegistration,
    name,
    setName,
    address,
    setAddress,
    email,
    setEmail,
    birthYear,
    setBirthYear,
    password,
    setPassword,
    phoneNumber,
    setPhoneNumber,
    status,
    setStatus,
    location,
    setLocation,
    gender,
    setGender
  }
}

export default useSignUp
