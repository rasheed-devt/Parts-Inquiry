import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Submit Inquiry (Admin)
function submitInquiry() {
    const model = document.getElementById("model").value;
    const brand = document.getElementById("brand").value;
    const make = document.getElementById("make").value;
    const chassisNumber = document.getElementById("chassisNumber").value;
    const partName = document.getElementById("partName").value;
    const description = document.getElementById("description").value;
    const price = document.getElementById("price").value;

    db.collection("inquiries").add({
        model, brand, make, chassisNumber,
        partName, description, price,
        status: "Pending"
    }).then(() => alert("Inquiry Submitted"))
      .catch(error => alert(error.message));
}

// Load Inquiries (Supplier)
function loadInquiries() {
    db.collection("inquiries").onSnapshot(snapshot => {
        document.getElementById("inquiryList").innerHTML = "";
        snapshot.forEach(doc => {
            let data = doc.data();
            document.getElementById("inquiryList").innerHTML += `
                <tr>
                    <td>${data.model}</td>
                    <td>${data.brand}</td>
                    <td>${data.make}</td>
                    <td>${data.chassisNumber}</td>
                    <td>${data.partName}</td>
                    <td>${data.description}</td>
                    <td>${data.price}</td>
                    <td>${data.status}</td>
                    <td>
                        <select onchange="updateStatus('${doc.id}', this.value)">
                            <option value="Pending" ${data.status === "Pending" ? "selected" : ""}>Pending</option>
                            <option value="Accepted" ${data.status === "Accepted" ? "selected" : ""}>Accepted</option>
                            <option value="Rejected" ${data.status === "Rejected" ? "selected" : ""}>Rejected</option>
                        </select>
                    </td>
                </tr>
            `;
        });
    });
}
