'use client';   
import supabase from "../config/supabaseClient";
import Link from "next/link"; //this is for the navigation links to other pages
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";

export default async function Home() {
    const{ data: qa} = await supabase.from("qa").select();

    const toggleAnswer = (event: any) => {
        const answerElement = event.target.nextSibling;
        if (answerElement.style.display === "none") {
            answerElement.style.display = "block";
        } else {
            answerElement.style.display = "none";
        }
    };

    const handleDelete = async (id: string) => {
        
            const { data, error } = await supabase
                .from("qa")
                .delete()
                .eq("id", id);
    
            if (error) {
                console.error("Error deleting qa:", error);
            }
            if (data) {
                console.log("Deleted qa:", data);
            }
    }
            

    return(
    <div>
        <nav>
            <h1>Supa Q&A Home</h1>
            <Link href="/create">Create New Q&A</Link>
        </nav>
        <div className="page home"> 
            <div className="qa-grid">
                {qa && qa.map((qa: { id: string, question: string, answer: string, rating: string}) => (
                    <div className="qa-card" key={qa.id}> 
                        <h3 className="qa-question">{qa.question}</h3> 
                        <div className="qa-rating">{qa.rating}</div>
                        <div className="buttons">
                            <i className="qa-answer-button" onClick={toggleAnswer}>answer</i>
                            <h2 className="qa-answer" style={{display: "none"}}>{qa.answer}</h2>
                            <a href={`/home/${qa.id}`}>
                                <i className="qa-edit">
                                    <FontAwesomeIcon icon={faEdit} />
                                </i>
                            </a>
                            <i className="qa-delete" onClick={async (event) => {
                                event.preventDefault();
                                await handleDelete(qa.id);}}>
                                    <FontAwesomeIcon icon={faTrash} />
                            </i>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}