'use client';
import Link from 'next/link';
import createQA from '../../actions/createQA';
import { Button } from '@/components/ui/button';

const Create = async() => {
    const handleAddQA = async (formData: FormData) => {
        const question = formData.get('question') as string;
        const answer = formData.get('answer') as string;
        const rating = Number(formData.get('rating'));

        try {
            await createQA(question, answer, rating);
            window.location.href = '/home';
        } catch (error) {
            console.error('Error adding qa:', error);
        }

    }
    
    return (
        <div>
            <nav>
                <h1>Supa QA Create</h1>
                <Link href="/home">Home</Link>
                {/* <Link href="/update">Update QA</Link> */}
            </nav>
            <form
                onSubmit={async (event) => {
                    event.preventDefault();
                    await handleAddQA(new FormData(event.currentTarget));
                }}
            >
                <label>
                    Question:
                    <input type="text" name="question" required />
                </label>
                <label>
                    Answer:
                    <input type="text" name="answer" required />
                </label>
                <label>
                    Rating:
                    <input type="number" name="rating" required />
                </label>
                <Button  type="submit">Add QA</Button>
            </form>
        </div>
    );    
};
export default Create;

