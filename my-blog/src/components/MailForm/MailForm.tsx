'use client';

import {FormEvent, useEffect, useState} from "react";
import {mailFormSchema} from "@/validation-schma/mail-form";
import SuccessToast from "@/components/MailForm/SendToast/SuccessToast/SuccessToast";
import FailToast from "@/components/MailForm/SendToast/FailToast/FailToast";

let timeout: NodeJS.Timeout | null;
const MailForm = () => {

    const [isDisabled, setIsDisabled] = useState(false);

    const [conditionalToast, setConditionalToast] = useState({
        success: false,
        fail: false,
    });

    const handleToastClose = () => {
        if(timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        setConditionalToast({
            success: false,
            fail: false,
        });
    };

    const handleMailSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formEl = e.target;

        setIsDisabled(true);

        try {
            const mailForm = await mailFormSchema.validate({
                from: formEl.from.value,
                subject: formEl.subject.value,
                text: formEl.text.value,
            });

            const res = await fetch('/api/mail', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mailForm),
            });

            if (res.status === 200) {
                setConditionalToast({
                    success: true,
                    fail: false,
                });
            } else {
                console.log(await res.json());
                setConditionalToast({
                    success: false,
                    fail: true,
                });
            }

            if(timeout) clearTimeout(timeout);

            timeout = setTimeout(() => {
                setConditionalToast({
                    success: false,
                    fail: false,
                });
            }, 3000);

        } catch (error: any) {
            console.error(error);
            alert(error.message);
            return false;
        }

        setIsDisabled(false);
    };

    useEffect(() => {
        return () => {
            if(timeout) {
                clearTimeout(timeout)
                timeout = null;
            }
        }
    }, []);

    return (
        <>
            <form className="bg-slate-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left" onSubmit={handleMailSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Your Email
                    </label>
                    <input
                        name="from"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Subject
                    </label>
                    <input
                        name="subject"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"/>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Message
                    </label>
                    <textarea
                        name="text"
                        rows={6}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"></textarea>

                </div>
                <div className="flex items-center justify-end">
                    <button
                        disabled={isDisabled}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-75 disabled:pointer-events-none"
                        type="submit">
                        Send email
                    </button>
                </div>
            </form>
            <SuccessToast isShow={conditionalToast.success} onClose={handleToastClose} />
            <FailToast isShow={conditionalToast.fail} onClose={handleToastClose} />
        </>
    )
};

export default MailForm