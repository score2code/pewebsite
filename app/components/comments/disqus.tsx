
'use client';

import { useEffect } from 'react';

interface DisqusCommentsProps {
    url: string;
    identifier: string;
    title: string;
}

const DisqusComments: React.FC<DisqusCommentsProps> = ({ url, identifier, title }) => {
    const disqus_shortname = 'your-disqus-shortname'; // TODO: Replace with your Disqus shortname

    useEffect(() => {
        const disqus_config = function (this: any) {
            this.page.url = url;
            this.page.identifier = identifier;
            this.page.title = title;
        };

        // Check if Disqus script is already loaded
        if (!window.DISQUS) {
            const d = document, s = d.createElement('script');
            s.src = `https://${disqus_shortname}.disqus.com/embed.js`;
            s.setAttribute('data-timestamp', String(+new Date()));
            (d.head || d.body).appendChild(s);
        } else {
            // If script is already loaded, just reset the config for the new page
            window.DISQUS.reset({
                reload: true,
                config: disqus_config,
            });
        }

        // Set the config for the current page
        (window as any).disqus_config = disqus_config;

    }, [url, identifier, title]);

    return (
        <div id="disqus_thread" className="bg-gray-800 rounded-xl p-6 mt-8"></div>
    );
};

export default DisqusComments;
