/** @jsx vNode */
/* eslint-disable no-unused-vars */
import { vNode } from '@ocdla/view';
import Hyperlink from './Hyperlink';
/* eslint-enable */

export default function Body() {
    return (
        <main class='flex flex-col gap-4 p-8'>
            <div>
                <h1 class='text-4xl font-bold'>ORS 1.001</h1>
                <p class='text-3xl font-thin'>State policy for courts</p>
            </div>
            <div class='flex flex-col gap-4'>
                <ul class='flex'>
                    <li class='rounded-t-md border border-b-transparent p-4'>
                        <button>Text</button>
                    </li>
                    <li class='border border-transparent border-b-inherit p-4 text-blue-400'>
                        <button>Annotations</button>
                    </li>
                    <li class='w-full border border-transparent border-b-inherit p-4'>
                        &nbsp;
                    </li>
                </ul>
                <p>
                    The Legislative Assembly hereby declares that, as a matter
                    of statewide concern, it is in the best interests of the
                    people of this state that the judicial branch of state
                    government, including the appellate, tax and circuit courts,
                    be funded and operated at the state level. The Legislative
                    Assembly finds that state funding and operation of the
                    judicial branch can provide for best statewide allocation of
                    governmental resources according to the actual needs of the
                    people and of the judicial branch by establishing an
                    accountable, equitably funded and uniformly administered
                    system of justice for all the people of this state. [1981
                    s.s. c.3 §1]
                </p>
            </div>
            <hr />
            <p>
                <small>
                    <i>
                        Source: Section 1.001 — State policy for courts,{' '}
                        <Hyperlink
                            href='https://­oregonlegislature.­gov/bills_laws/ors/ors001.­html'
                            body='https://­oregonlegislature.­gov/bills_laws/ors/ors001.­html'
                        />
                    </i>
                </small>
            </p>
        </main>
    );
}
