import FormInput from '@/components/form/FormInput';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { faker } from '@faker-js/faker';
const createProductAction = async (formData: FormData) => {
  'use server';
  const name = formData.get('name') as string;
  console.log(name);
};

function CreateProductPage() {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>create product</h1>
      <div className='border p-8 rounded-md'>
        <form action={createProductAction}>
          <FormInput
            name='name'
            label='product name'
            type='text'
            defaultValue={name}
            placeholder='Sofa'
          />
          <Button type='submit' size={'lg'}>
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
}

export default CreateProductPage;
