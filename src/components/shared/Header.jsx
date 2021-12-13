import * as React from 'react'

export default function Header() {
    return (
        <header>
            <h1>This is a configured React webpack project with SSR!</h1>
            <h1>ts-loader bug was fixed with this changes:</h1>
            <h1>https://github.com/TypeStrong/ts-loader/pull/1290/files</h1>
        </header>
    );
}