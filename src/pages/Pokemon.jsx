import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Pokemon = () => {
  const { pkm } = useParams()

  const {data, loading, error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${pkm}`)

  if (loading) {
    return <p>loading...</p>
  }


  return (
    <div>
      <p>{data.name}</p>
    </div>
  )
}

export default Pokemon