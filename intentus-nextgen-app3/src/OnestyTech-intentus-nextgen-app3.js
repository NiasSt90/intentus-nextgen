import singleSpaHtml from "single-spa-html";

const htmlLifeCycles = singleSpaHtml({
  template: (props) =>
    `<h2>App 3</h2>
         <div>
         Static HTML 
            <code>
                (${props.name})
            </code>
        </div>
        `,
});

export const { bootsrap, mount, unmount } = htmlLifeCycles;
