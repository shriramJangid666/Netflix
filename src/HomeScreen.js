import React from "react";
import './homeScreen.css'
import Nav from "./Nav";
import Banner from "./Banner";
import requests from "./Requests";
import Row from "./Row";


function HomeScreen(){
    return(
        <div className="homeScreen">
          <Nav/>
          <Banner/> 
          <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
          <Row title="Trending Now" fetchUrl = {requests.fetchTrending} isLargeRow/>
          <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} isLargeRow/>
          <Row title="Action Movies" fetchUrl = {requests.fetchActionMovies} isLargeRow/>
          <Row title="Comedy Movies" fetchUrl = {requests.fetchComedyMovies} isLargeRow/>
          <Row title="Horror Movies" fetchUrl = {requests.fetchHorrorMovies} isLargeRow/>
          <Row title="Romantic Movies" fetchUrl = {requests.fetchRomanticMovies} isLargeRow/>
          <Row title="Documentaries" fetchUrl = {requests.fetchDocumentaries} isLargeRow/>
        </div> 
    )
}

export default HomeScreen