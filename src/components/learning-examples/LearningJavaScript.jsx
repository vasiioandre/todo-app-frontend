const person = {
    name: 'Ioana',
    address: {
        street: 'Versului',
        city: 'Timisoara'
    },
    profiles: ['facebook', 'linkedin', 'instagram'],
    printProfile: () => {
        person.profiles.map(
            (profile) => {
                console.log(profile)
            }
        )
    }
}

export default function LearningJavaScript() {
    return (
        <>
            <div>{person.name} Learning JavaScript</div>
            <div>{person.address.city}, {person.address.street}</div>
            <div>{person.profiles[2]}</div>
            <div>{ person.printProfile() }</div>
        </>
    )
}