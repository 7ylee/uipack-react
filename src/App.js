import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import TrackVisibility from 'react-on-screen';
import * as theme from './theme';

import Motion from './components/Motion';

// core ui
import Emoji from './components/Emoji';
import Button from './components/Button';

const GlobalStyle = createGlobalStyle`
    * {
        line-height: 1.5;
    };
`;

const App = () =>
    <ThemeProvider theme={theme.idus}>
        <div>
            <GlobalStyle />
            <Button type="button" disabled>THEMED BUTTON <Emoji symbol="😃" /></Button>
            <Button type="button" primary>THEMED BUTTON <Emoji symbol="😃" /></Button>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis, ipsam accusamus velit dicta nulla repudiandae dolorum eligendi natus ipsa sit tempore officiis optio ullam quis cum fugit nam sequi asperiores minima eum iste pariatur numquam? Assumenda repellendus iste, libero quibusdam qui non asperiores earum ipsa optio similique neque enim debitis quis! Consequuntur, tempora beatae odit saepe nisi hic, corrupti odio, dolor laudantium qui totam! Quo animi consequatur illo nostrum earum voluptate culpa alias. Id, ratione illum quibusdam, vel eveniet non unde quia ab cumque ex minima distinctio blanditiis pariatur? Aperiam modi maxime quis excepturi, nostrum dolorem odit quos quo voluptatum distinctio nisi accusantium adipisci repellat minima cupiditate ab provident quibusdam delectus labore cum ducimus corrupti, placeat eligendi? Suscipit vel fuga laboriosam dolore ex! Incidunt unde perferendis quaerat dignissimos amet minus autem quidem repellendus accusamus blanditiis rem corporis quos iusto illum, quae consequuntur iste placeat similique quod quasi! Officia aliquam incidunt dolores? Adipisci obcaecati ex maiores, unde fugit iure quia corrupti provident praesentium, in dolores earum alias hic quam culpa tempora accusamus commodi, soluta quis corporis. Architecto omnis labore corporis saepe ea porro dolorem ad eligendi illum, vel laboriosam ratione ut temporibus, veritatis natus tempora incidunt beatae neque quis totam optio! Voluptatem repellendus magnam, architecto aut perspiciatis nostrum delectus aliquam hic iste animi, id non fugiat saepe accusamus ipsam, quae iure. Assumenda quas nam illo facere omnis cum, dolorum ipsam nulla nemo voluptatibus aliquid consequuntur, distinctio id commodi beatae, amet et harum magnam odit ullam fugit repellendus quia libero. Laborum et eveniet maiores libero dolorum beatae optio pariatur, eos aut! Illo perspiciatis est omnis fugiat dolorum voluptates aliquid rem libero repellendus commodi. Fuga maiores sapiente nulla blanditiis, voluptates soluta quos fugit ipsa tempore quae saepe vero tenetur magni ullam ipsum molestias beatae maxime sequi repellat. Assumenda atque debitis sit natus!</p>

            <TrackVisibility>
                <Motion>
                    <Motion.FromBottom>FromBottom blahblah</Motion.FromBottom>
                </Motion>
            </TrackVisibility>
        </div>
    </ThemeProvider>
    ;

export default App;