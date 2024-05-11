'use client';

// import * as React from "react";
import Link from "next/link";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

export default function App() {
return(
  <BrowserRouter>
    <nav>
      <h1>Supa Q&A</h1>
      <Link href="/home" >Home page </Link>
      <Link href="/create" >Create New Q&A </Link>
    </nav>
    <Routes>
      <Route path="/home" element={<Link href="/home"/>} />
      <Route path="/create" element={<Link href="/create" />} />
      <Route path="/:update" element={<Link href="/update" />} />
    </Routes>
  </BrowserRouter>
);
}