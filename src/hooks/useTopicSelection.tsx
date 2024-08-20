import { useState } from 'react';
import Swal from 'sweetalert2';

const useTopicSelection = () => {
    const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
    const [selectedTopicsSecond, setSelectedTopicsSecond] = useState<string[]>([]);

    const toggleTopic = (topic: string, formNumber: number) => {
        const selectedTopicsToUpdate = formNumber === 1 ? selectedTopics : selectedTopicsSecond;
        const setSelectedTopicsToUpdate = formNumber === 1 ? setSelectedTopics : setSelectedTopicsSecond;
        const totalSelectedTopics = selectedTopics.length + selectedTopicsSecond.length;

        if (totalSelectedTopics >= 5 && !selectedTopicsToUpdate.includes(topic)) {
            Swal.fire({
                title: "Warning",
                text: "Sorry, choose a maximum of 5",
                icon: 'warning'
            });
            return;
        }

        if (selectedTopicsToUpdate.includes(topic)) {
            setSelectedTopicsToUpdate(selectedTopicsToUpdate.filter((selectedTopic) => selectedTopic !== topic));
        } else {
            setSelectedTopicsToUpdate([...selectedTopicsToUpdate, topic]);
        }
    };

    return { selectedTopics, selectedTopicsSecond, toggleTopic };
};

export default useTopicSelection;
