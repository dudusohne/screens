import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ContentProps {
    id: string;
    name: string;
    about: string;
    description: string;
    photo: string;
    enviroments: [string];
    price: string;
    acess: string;
    type: string;
}

interface UserProps {
    id: string;
    name: string;
    email: string;
    adress: string;
    password: string;
}

export interface StorageContentProps {
    [id: string]: {
        data: ContentProps;
        notificationId: string;
    }
}

export async function saveContent(content: ContentProps) {
    try {
        const data = await AsyncStorage.getItem('@smartry-teste: content');
        const oldContent = data ? (JSON.parse(data) as StorageContentProps) : {};

        const newContent = {
            [content.id]: {
                data: content
            }
        }

        await AsyncStorage.setItem('@smartry-teste: content',
            JSON.stringify({
                ...newContent,
                ...oldContent
            })
        );

    } catch (error) {
        throw new Error(error);
    }
}

export async function loadContent(): Promise<ContentProps[]> {
    try {
        const data = await AsyncStorage.getItem('@smartry-teste: content');
        const contents = data ? (JSON.parse(data) as StorageContentProps) : {};

        const contentSorted = Object
            .keys(contents)
            .map((content) => {
                return {
                    ...contents[content].data
                }
            });
        return contentSorted;

    } catch (error) {
        throw new Error(error);
    }

}

export async function removeContent(id: string): Promise<void> {

    const data = await AsyncStorage.getItem('@smartry-teste: content');
    const contents = data ? (JSON.parse(data) as StorageContentProps) : {};

    // await Notifications.cancelScheduledNotificationAsync(contents[id].notificationId);

    delete contents[id]

    await AsyncStorage.setItem(
        '@smartry-teste: content',
        JSON.stringify(contents)
    );

}
