'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import supabase from '../../config/supabaseClient';
import updateQA from '@/actions/updateQA';
import fechSingleQA from '@/actions/fetchSingleQA';

const Update = async( {params,}:{params: {update: string}}) => {
    const { data: qa } = await supabase
    .from('qa')
    .select()
    .eq('id', params.update)
    .single();
    //this is the function that will update the QA by taking the form data and the params as arguments and updating the QA in the database with the new data from the form 
    try {
        await supabase
            .from('qa')
            .update([{id: params.update, 
                question: 'question', 
                answer: 'answer', 
                rating: 0}]);
    }
    catch (error) {
        console.error('Error updating QA:', error);
    }

    console.log('qa:', qa);

    const handleUpdateQA = async (formData: FormData) => {
        const question = formData.get('question') as string;
        const answer = formData.get('answer') as string;
        const rating = Number(formData.get('rating'));
        try {
            await updateQA(params.update,question, answer, rating);
            window.location.href = '/home';
        }
        catch (error) {
            console.error('Error updating QA:', error);
        }
    }

    return (
        // <h2>Update - {params.update}</h2>
        <div>
            <nav>
                <h1>Supa QA Update</h1>
                <Link href="/home">Home</Link>
                <Link href="/create">Create New QA</Link>
                {/* <h2>Update - {params.update}</h2> */}
            </nav>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    await handleUpdateQA(new FormData(event.currentTarget));
                }}
            >
                <label>
                    ID:
                    <h2>{params.update}</h2>

                    {/* <input type="text" name="id" required /> */}
                </label>
                <label>
                    Question:
                    <input 
                        type="text" 
                        name="question" 
                        defaultValue={qa.question}
                        required
                     />
                </label>
                <label>
                    Answer:
                    <input type="text"
                        name="answer"
                        defaultValue={qa.answer}
                        required
                    />
                </label>
                <label>
                    Rating:
                    <input type="number" 
                        name="rating"
                        defaultValue={qa.rating}
                        required
                    />
                </label>
                <Button type="submit">Update QA</Button>
            </form>
        </div>
    );
};
export default Update;

// export default async function Update( {params,}:{params: {update: string}}) {
//     const { data: qa } = await supabase.from('qa').select().eq('id', params.update);
//     const handleUpdateQA = async (formData: FormData, params: { update: string }) => {  
//         const id = params.update;
//         const question = formData.get('question') as string;
//         const answer = formData.get('answer') as string;
//         const rating = Number(formData.get('rating'));

//         try {
//             await supabase.from('qa').update([{id, question, answer, rating}]);
//         } catch (error) {
//             console.error('Error updating QA:', error);
//         }
//     }
//     return (
//         <div>
//             <nav>
//                 <h1>Supa QA Update</h1>
//                 <Link href="/home">Home</Link>
//                 <Link href="/create">Create New QA</Link>
//                 {/* <h2>Update - {params.update}</h2> */}
//             </nav>
//             <form
//                 onSubmit={async (event) => {
//                     event.preventDefault();
//                     await handleUpdateQA(new FormData(event.currentTarget), params);
//                 }}
//             >
                
//                 <label>
//                     ID:
//                     <h2>{params.update}</h2>

//                     {/* <input type="text" name="id" required /> */}
//                 </label>
//                 <label>
//                     Question:
//                     <input type="text" name="question" required />
//                 </label>
//                 <label>
//                     Answer:
//                     <input type="text" name="answer" required />
//                 </label>
//                 <label>
//                     Rating:
//                     <input type="number" name="rating" required />
//                 </label>
//                 <Button type="submit">Update QA</Button>
//             </form>


//         </div>
//         // ))}
//     );
// }

