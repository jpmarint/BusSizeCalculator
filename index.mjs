export const handler = async (event) => {
    const groups = event.queryStringParameters.groups.split(",").map(Number);
    const totalPeople = groups.reduce((a, b) => a + b, 0);
    let sizes = [];
    for (let x = 1; x <= totalPeople; x++) {
        if (totalPeople % x === 0) {
            let bus = 0;
            let canTravel = true;
            for (let i = 0; i < groups.length; i++) {
                bus += groups[i];
                if (bus > x) {
                    canTravel = false;
                    break;
                } else if (bus === x) {
                    bus = 0;
                }
            }
            if (canTravel && bus === 0) {
                sizes.push(x);
            }
        }
    }
    const response = {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sizes: sizes.join(",") })
    };
    return response;
};