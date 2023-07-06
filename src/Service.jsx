import React from 'react'
import { useParams } from 'react-router-dom';
const Service = () => {
  const {name} = useParams();
  const {firstName,lastName} = useParams();
  return (
    <>
    <h1>Hi This is Service {name}</h1>
    <h1>Hi This is Service {firstName} {lastName}</h1>
    </>
  )
}

export default Service;