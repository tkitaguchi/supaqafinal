import supabase from "../../app/config/supabaseClient";
import { useEffect, useState } from "react";

const Data: React.FC = () => {
    const [qa, setQA] = useState<any>(null);

    useEffect(() => {
        async function fetchData() {
            const { data, error } = await supabase.from("qa").select();
            if (error) console.log("error", error);
            setQA(data);
        }
        fetchData();
    }, []);

    return qa;
};

fetch
            