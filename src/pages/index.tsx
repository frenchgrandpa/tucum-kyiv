import {FC} from "react";
import {GetServerSidePropsContext} from "next";


interface Props {

}


const Index: FC<Props> = () => {
    return (
        <div>
            Hello Vercel
        </div>
    );
};

export default Index;



export async function getServerSideProps({locale}: GetServerSidePropsContext) {
    return {
        props: {
            locales: {
                ...await import(`@l/shared/${locale}.json`)
            }
        }
    };
}
