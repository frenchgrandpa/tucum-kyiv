import {FC} from "react";
import {NextIntlProvider} from "next-intl";

import "./dayjs";

import "dayjs/locale/en";
import "dayjs/locale/uk";//uk = ua
import "dayjs/locale/ru";

//Update locales here and in next.config.js



interface Props {
    locales: any;
}


const I18nProvider: FC<Props> = ({children, locales}) => {
    return (
        <NextIntlProvider messages={locales}>
            {children}
        </NextIntlProvider>
    );
};

export default I18nProvider;
