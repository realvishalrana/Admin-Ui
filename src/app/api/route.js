export default async function getData() {
    try {
      const res = await fetch(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      );
      if (!res.ok) {
        throw new Error(
          `Failed to fetch data: ${res.status} - ${res.statusText}`
        );
      }
      return res.json();
    } catch (error) {
      throw new Error(`Failed to fetch data: ${error.message}`);
    }
  }
  