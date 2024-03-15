import {UserButton} from "@clerk/nextjs";

export default function Home() {
    return (
        <main>
            <div className="w-full flex justify-end p-2">
            <UserButton afterSignOutUrl="/"  />
            </div>
        </main>
    );
}
