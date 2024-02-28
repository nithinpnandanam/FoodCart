const ContactUs = () => {
  return (
    <div>
      <h1 className="text-center text-3xl my-4">This is the contact us page</h1>
      <div className="flex p-4 justify-center">
        <input type="text" className="m-4 p-2 border rounded  border-gray-400"placeholder="Name"/>
        <input type="text" className="m-4 p-2 border rounded  border-gray-400" placeholder="Message"/>
        <button type="submit" className="m-4 p-2 ml-1 text-base py-1 px-5 border rounded-lg border-black">Submit</button>
      </div>
    </div>
  );
};
export default ContactUs;
